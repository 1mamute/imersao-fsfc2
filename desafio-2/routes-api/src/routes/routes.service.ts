import { Injectable } from '@nestjs/common';
import { Route, RouteDocument } from './entities/route.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(Route.name) private routeModel: Model<RouteDocument>,
  ) {}

  findAll(): Promise<RouteDocument[]> {
    return this.routeModel.find().exec();
  }

  findOne(id: number): Promise<RouteDocument> {
    return this.routeModel.findOne({ _id: id }).exec();
  }
}
