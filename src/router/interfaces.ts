export interface Routes {
  root: string;
  man: string;
  info: string
};

export const SwitchRoutes: Routes = {
  root: "/",
  man: "/man",
  info: "/info/:id"
};
 
export const { root, man, info } = SwitchRoutes;