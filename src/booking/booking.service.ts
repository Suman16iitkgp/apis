import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
  constructor(@InjectModel(Book.name) private BookModel: Model<BookDocument>) {}

  async create(createBookingDto: CreateBookingDto) {
    return new this.BookModel(createBookingDto).save();
  }


  findCity(city: string) {
    return this.RegModel.find( {city} );
  }

  async book(id: number, updateBookingDto: UpdateBookingDto) {
    return this.RegModel.updateOne( {set: UpdateRegistrationDto} );
  }

}
