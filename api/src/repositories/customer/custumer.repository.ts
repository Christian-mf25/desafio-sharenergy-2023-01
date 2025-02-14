import { Repository, getRepository } from "typeorm";

import { Customer } from "../../entities/Customer";
import { ICustomer, ICustomerRepo, IdataUpdate } from "./interfaces";

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

  findByPhone = async (phone) =>
    await this.ormRepository.findOne({
      where: { phone },
    });

  findByCpf = async (cpf) =>
    await this.ormRepository.findOne({
      where: { cpf },
    });

  updateCustomer = async (dataCustomer: IdataUpdate, update: IdataUpdate) =>
    await this.ormRepository.update(dataCustomer, update);

  deleteCustomer = async (dataCustomer: IdataUpdate) =>
    await this.ormRepository.delete(dataCustomer);
}

export { CustomerRepository, ICustomer };
