import { Controller, Get, Post, UseGuards } from '@nestjs/common';
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
}
