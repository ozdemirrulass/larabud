import { ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from 'src/user/dto/register-user.dto';
import { UserService } from 'src/user/user.service';
import { JwtPayload } from './types/jwt-payload';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }

    async registerUser(registerUserDto: RegisterUserDto) {
        const user = await this.userService.findByEmail(registerUserDto.email);
        if (user) {
            throw new ConflictException("User already exists!")
        }
        return this.userService.create(registerUserDto)
    }
    async generateTokens(userId: number) {
        const payload: JwtPayload = { sub: userId }

        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload),
            this.jwtService.signAsync(payload, this.refreshTokenConfig)
        ])

        return {
            accessToken,
            refreshToken
        }
    }

    async validateLocalUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email);
        if (!user) throw new UnauthorizedException("User not found!");
        const isPasswordMatched = verify(user.password, password);
        if (!isPasswordMatched) throw new UnauthorizedException("Invalid Credentials!");

        return { id: user.id, name: user.name }
    }
}
