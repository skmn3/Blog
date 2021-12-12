import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/user-dto";
import { User } from "./user.entity";
import * as bcrypt from "bcryptjs";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password, email } = authCredentialsDto;

        const salt  = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(password, salt);

        const user = this.create({ username, password: hashedpassword, email });
        
        try {
            await this.save(user);
        } catch (error) {
            if(error.code === '23505') {
                throw new ConflictException('Existing user');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
}