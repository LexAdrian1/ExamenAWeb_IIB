import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EntrenadorController} from "./entrenador/entrenador.controller";
import {PokemonController} from "./pokemon/pokemon.controller";
import {EntrenadorService} from "./entrenador/entrenador.service";
import {PokemonService} from "./pokemon/pokemon.service";
import {AutorizacionController} from "./Autorizacion/Autorizacion.controller";

@Module({
  imports: [],
  controllers: [AppController,EntrenadorController,PokemonController,AutorizacionController],
  providers: [AppService,EntrenadorService,PokemonService],
})
export class AppModule {}
