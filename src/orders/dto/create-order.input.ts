import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field()
  customerId: string
}
 