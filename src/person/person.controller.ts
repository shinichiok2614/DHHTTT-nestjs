import { Controller, Post } from '@nestjs/common';
import { PersonService } from './person.service';
import { InsertPersonDTO } from './dto';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}
  @Post()
  insertPerson(insertPersonDTO: InsertPersonDTO) {
    return this.personService.insertPerson(insertPersonDTO);
  }
}
