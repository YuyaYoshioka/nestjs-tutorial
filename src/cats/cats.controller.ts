import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { ForbiddenException } from 'src/forbidden.exception';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { CatsService } from './cats.service';
import { CreateCatDto, UpdateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    throw new ForbiddenException();
  }

  @Get()
  async findAll() {
    throw new ForbiddenException();
  }
  // async findAll(): Promise<Cat[]> {
  //   return this.catsService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
