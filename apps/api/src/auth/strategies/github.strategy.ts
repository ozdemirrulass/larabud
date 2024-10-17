import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-github2";
import githubOauthConfig from "../config/github-oauth.config";
import { ConfigType } from "@nestjs/config";
import { AuthService } from "../auth.service";

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject(githubOauthConfig.KEY) private readonly githubConfig: ConfigType<typeof githubOauthConfig>,
        private readonly authService: AuthService
    ) {
        super({
            callbackURL: githubConfig.callbackURL,
            clientID: githubConfig.clientID,
            clientSecret: githubConfig.clientSecret,
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile, done: any) {
        const user = await this.authService.validateGithubUser({
            email: profile.emails[0].value,
            name: profile.displayName,
            password: ''
        })

        done(null, user)
    }
}