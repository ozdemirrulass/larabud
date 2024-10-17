import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterUserDto } from 'src/user/dto/register-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
    ) { }

    async registerUser(registerUserDto: RegisterUserDto) {
        const user = await this.userService.findByEmail(registerUserDto.email);
        if (user) {
            throw new ConflictException("User already exists!")
        }
        return this.userService.create(registerUserDto)
    }
}
