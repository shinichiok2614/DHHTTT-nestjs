import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { PersonService } from './person.service';
import { InsertPersonDTO } from './dto';
import { MyJWTGuard } from 'src/guard';
import { GetUser } from 'src/decorator';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}
  @UseGuards(MyJWTGuard)
  @Post('create')
  insertPerson(insertPersonDTO: InsertPersonDTO) {
    return this.personService.insertPerson(insertPersonDTO);
  }

  @UseGuards(MyJWTGuard)
  @Get()
  getPerson(@GetUser('sub') userId: number) {
    return this.personService.getPerson(userId);
  }

  @UseGuards(MyJWTGuard)
  @Get('all')
  getAllPerson() {
    return this.personService.getAllPerson();
  }

  @UseGuards(MyJWTGuard)
  @Patch('/admin/:id')
  updatePersonByIdAdmin(@Param('id', ParseIntPipe) id: number, @Body() updateDTO: InsertPersonDTO) {
    return this.personService.updatePersonByIdAdmin(id, updateDTO);
  }
}
