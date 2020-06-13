import { getRepository } from 'typeorm';
import Company from '../models/Company';

import AppError from '../errors/AppError';

interface Request {
  cnpj: number;
  company_code: number;
  state_registration: string;
  comapany_name: string;
  fantasy_name: string;
  adress: string;
  number: string;
  district: string;
  complement: string;
  zip_code: string;
  city: string;
  state: string;
  commercial_phone: string;
  cell_phone: string;
}

class CreateCompanyService {
  public async execute({
    cnpj,
    company_code,
    state_registration,
    comapany_name,
    fantasy_name,
    adress,
    number,
    district,
    complement,
    zip_code,
    city,
    state,
    commercial_phone,
    cell_phone,
  }: Request): Promise<Company> {
    const companiesRepository = getRepository(Company);

    const checkCompanyExists = await companiesRepository.findOne({
      where: { cnpj },
    });

    if (checkCompanyExists) {
      throw new AppError('Company already used.');
    }

    const company = companiesRepository.create({
      cnpj,
      company_code,
      state_registration,
      comapany_name,
      fantasy_name,
      adress,
      number,
      district,
      complement,
      zip_code,
      city,
      state,
      commercial_phone,
      cell_phone,
    });

    await companiesRepository.save(company);

    return company;
  }
}

export default CreateCompanyService;
