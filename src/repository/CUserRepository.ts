import { Entity, EntityRepository, Repository } from "typeorm";
import { CUser } from '../entities/CUser';

@EntityRepository(CUser)
export class CUserRepository extends Repository<CUser> {

}