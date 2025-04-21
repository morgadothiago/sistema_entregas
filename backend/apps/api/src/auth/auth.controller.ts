import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { CompanyDto } from "./dto/company.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post("signup/company")
  @HttpCode(HttpStatus.CREATED)
  signupCompany(@Body() company: CompanyDto) {
    return this.authService.signupCompany(company);
  }
}
