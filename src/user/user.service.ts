import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginUserDto } from '../dto/login-user.dto';
import { User } from '../interfaces/user.interface';
import { RegisterUserDto } from '../dto/register-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  getUsers() {
    return this.userModel.find();
  }
  findOne(email: string) {
    return this.userModel.findOne({ email });
  }
  login(data: LoginUserDto) {
    return this.userModel.findOne({email: data.email})
      .then(result => {
        if (!result) {
          throw new BadRequestException('Invalid email');
        } else {
          if (bcrypt.compareSync(data.password, result.password)) {
            const token = jwt.sign({
              email: result.email,
              first_name: result.first_name,
              last_name: result.last_name,
              role: result.role,
            }, 'ThisIsSecretKey', {expiresIn: '7d'});
            return {
              token,
              exp: 604800,
            };
          } else {
            throw new BadRequestException('Invalid password');
          }
        }
      });
  }
  register(data: RegisterUserDto) {
    data.password = bcrypt.hashSync(data.password, 10);
    const newUser = new this.userModel({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      role: data.role,
    });
    return newUser.save()
      .catch(err => {
        throw new BadRequestException('Email already exists');
      });
  }
  delete() {
    return this.userModel.deleteMany();
  }

  deleteById(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }
}
