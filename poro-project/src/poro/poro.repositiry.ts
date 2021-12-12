import { EntityRepository, Repository } from "typeorm";
import { PoroStatus } from "./poro.status";
import { Poro } from "./poro.entity";
import { CreatePoroDto } from "./dto/poro-dto";

@EntityRepository(Poro)
export class PoroRepository extends Repository<Poro> {

    async createPoro(createPoroDto: CreatePoroDto) : Promise<Poro> {
        const { title, description, Hashtag } = createPoroDto;

        const poro = this.create({
            title,
            description,
            Hashtag,
            status: PoroStatus.PUBLIC,
        })

        await this.save(poro);
        return poro;
    }
}