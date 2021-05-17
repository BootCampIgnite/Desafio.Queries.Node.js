type IFindUserWithGamesDTO = {
  user_id: string;
};

type IFindUserByFullNameDTO = {
  first_name: string;
  last_name: string;
};

export { IFindUserWithGamesDTO, IFindUserByFullNameDTO };
