import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [PeopleController],
  providers: [],
  imports: [NatsModule]
})
export class PeopleModule { }
