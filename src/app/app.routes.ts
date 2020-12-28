import { Routes } from "@angular/router";
import { PanierContainerComponent } from "./panier-container/panier-container.component";
import { CocktailContainerComponent } from "./cocktail-container/cocktail-container.component";
import { CocktailDetailsComponent } from "./cocktail-container/cocktail-details/cocktail-details.component";

export const APP_ROUTES: Routes = [
  { path: "", redirectTo: "cocktails", pathMatch: "full" },
  {
    path: "cocktails",
    component: CocktailContainerComponent,
    children: [
      { path: "new", component: CocktailEditComponent },
      { path: ":index/edit", component: CocktailEditComponent },

      { path: ":index", component: CocktailDetailsComponent },
      { path: "", redirectTo: "0", pathMatch: "full" }
    ]
  },
  { path: "panier", component: PanierContainerComponent }
];
