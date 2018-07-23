import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {EntrenadorController} from "./Paciente/entrenador.controller";
import {PokemonController} from "./Medicamento/pokemon.controller";
import {EntrenadorService} from "./Paciente/entrenador.service";
import {PokemonService} from "./Medicamento/pokemon.service";
import {AutorizacionController} from "./Autorizacion/Autorizacion.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PokemonEntity} from "./Medicamento/pokemon.entity";
import {EntrenadorEntity} from "./Paciente/entrenador.entity";
import {UsuarioEntity} from "./Usuarios/usuario.entity";
import {UsuarioController} from "./Usuarios/usuario.controller";
import {UsuarioService} from "./Usuarios/usuario.service";

@Module({
  imports: [

      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3307,
          username: 'root',
          password: 'root',
          database: 'baseExamenIIB',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true}),
      TypeOrmModule.forFeature([PokemonEntity,EntrenadorEntity,UsuarioEntity])

  ],
  controllers: [AppController,EntrenadorController,PokemonController,AutorizacionController,UsuarioController],
  providers: [AppService,EntrenadorService,PokemonService,UsuarioService],
})
export class AppModule {}
