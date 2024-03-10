import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, Query } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { NATS_SERVICE } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('people')
export class PeopleController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy,
  ) { }

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.client.send(
      { cmd: 'create_person' },
      createPersonDto,
    );
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.client.send(
      { cmd: 'find_all_people' },
      paginationDto,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.peopleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    // return this.peopleService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.peopleService.remove(+id);
  }
}
