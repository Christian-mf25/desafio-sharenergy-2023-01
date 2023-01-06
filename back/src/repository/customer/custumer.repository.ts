import { Repository, getRepository } from "typeorm";

import { Customer } from "../../entity/Customer";
import { ICustomer, ICustomerRepo } from "./interfaces";

class CustomerRepository implements ICustomerRepo {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  saveCustomer = async (customer: ICustomer) =>
    await this.ormRepository.save(customer);

  findCustomers = async () => await this.ormRepository.find();

  findOneCustomer = async (email) =>
    await this.ormRepository.findOne({
      where: { email },
    });
}

export { CustomerRepository, ICustomer };
