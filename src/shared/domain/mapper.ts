export interface IMapper<IDomain, IPersistence, IDomainDTO> {
  toDomain(rawData: IPersistence): IDomain;
  toPersistence(domain: IDomain): IPersistence;
  toDTO(domain: IDomain): IDomainDTO;
}
