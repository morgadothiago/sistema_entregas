import { Controller, Get, Param, Query, UseGuards } from "@nestjs/common";
import { AdminGuard } from "../admin/admin.guard";
import { UserService } from "./user.service";
import { IUserQueryParams } from "./dto/filter";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(AdminGuard)
  async paginate(@Query() filters: IUserQueryParams) {
    return this.userService.paginate(
      filters,
      +(filters.page || 1),
      +(filters.limit || 100),
    );
  }

  @Get(":id")
  @UseGuards(AdminGuard)
  async findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }
}
