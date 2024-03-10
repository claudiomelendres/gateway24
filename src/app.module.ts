import { Module } from '@nestjs/common';
import { NatsModule } from './transports/nats.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [NatsModule, PeopleModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
