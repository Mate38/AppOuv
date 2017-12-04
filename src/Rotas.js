import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal';
import TipoManifestacao from './components/TipoManifestacao';
import CadastroPessoaFisica from './components/CadastroPessoaFisica';
import CadastroPessoaJuridica from './components/CadastroPessoaJuridica';
import Manifestacao from './components/Manifestacao';
import AbreCamera from './components/AbreCamera';
import Teste from './components/Teste';

const Rotas = () => (
	<Router>
    <Scene key='root'>
      <Scene key='principal' hideNavBar component={Principal} initil title="Principal" />
      <Scene key='manifestacao' hideNavBar component={Manifestacao} title="Dados da Manifestação" />
      <Scene key='tipomanifestacao' hideNavBar component={TipoManifestacao} title="Tipo da Manifestação" />
      <Scene key='cadastropessoafisica' hideNavBar component={CadastroPessoaFisica} title="Cadastro de Pessoa Física" />
      <Scene key='cadastropessoajuridica' hideNavBar component={CadastroPessoaJuridica} title="Cadastro de Pessoa Jurídica" />
      <Scene key='abrecamera' hideNavBar component={AbreCamera} title="Camera" />
      <Scene key='teste' hideNavBar component={Teste} title="Teste" />
    </Scene>
  </Router>
);

export default Rotas;
