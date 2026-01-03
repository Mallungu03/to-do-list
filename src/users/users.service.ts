import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    await this.prisma.user.create({ data: createUserDto });
    return createUserDto;
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(updateUserDto: UpdateUserDto, id: string) {
    await this.prisma.user.update({ where: { id }, data: updateUserDto });
    return updateUserDto;
  }

  async delete(id: string) {
    await this.prisma.user.delete({ where: { id } });
    return true;
  }
}
