import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { CompanyDto } from "./dto/company.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "User login" })
  @ApiResponse({
    status: 200,
    description: "Login successful",
    schema: {
      example: {
        user: { id: 1, username: "exampleUser" },
        token: "exampleToken",
      },
    },
  })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
  @ApiOperation({ summary: "Company signup" })
  @ApiResponse({
    status: 201,
    description: "Company signup successful",
  })
  @ApiResponse({ status: 422, description: "Unprocessable Entity" })
  @Post("signup/company")
  @HttpCode(HttpStatus.CREATED)
  signupCompany(@Body() company: CompanyDto) {
    return this.authService.signupCompany(company);
  }
}
