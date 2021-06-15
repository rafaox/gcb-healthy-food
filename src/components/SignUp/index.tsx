import { FormEvent, useState } from 'react';

import Router from 'next/router';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';
import { setCookie } from 'nookies';

import { api } from '../../services/api';

import styles from './styles.module.scss';

type Address = {
  bairro: string;
  cep: string;
  complemento: string;
  localidade: string;
  logradouro: string;
  uf: string;
}

type Register = {
  name: string;
  date: Date;
  cpf: string;
  zipCode: string;
  district: string;
  city: string;
  fu: string;
  publicPlace: string;
  complement: string;
}

export function SignUp() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [district, setDistrict] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [fu, setFU] = useState('');
  const [publicPlace, setPublicPlace] = useState('');

  function handleSearch() {
    try {
      if (zipCode && zipCode.length === 8) {
        api.get<Address>(`https://viacep.com.br/ws/${zipCode}/json`)
          .then(response => response.data)
          .then(result => {
            if (result) {
              setDistrict(result.bairro);
              setComplement(result.complemento);
              setCity(result.localidade);
              setPublicPlace(result.logradouro);
              setFU(result.uf);
            }
          });
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleSignUp(e: FormEvent) {
    e.preventDefault();

    if (!name) return;
    if (Object.prototype.toString.call(new Date(date)) !== '[object Date]') return;
    if (!cpfValidator.isValid(cpf)) return;
    if (!city) return;
    if (!fu) return;
    if (!zipCode) return;

    const registerData = {
      name,
      date,
      cpf,
      zipCode,
      district,
      city,
      fu,
      publicPlace,
      complement
    };

    localStorage.setItem('register', JSON.stringify(registerData));
    setCookie(undefined, 'healthyfood.register', JSON.stringify(registerData), {
      path: '/'
    });
    Router.push('/');
  }

  return (
    <section className={styles.signInContainer}>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div>
          <input
            type="number"
            pattern="[0-9]"
            placeholder="CPF"
            maxLength={11}
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            onWheel={(e) => e.currentTarget.blur()}
          />

          <input
            type="date"
            placeholder="Birth date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <input
            type="number"
            pattern="[0-9]"
            placeholder="Zip code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            onWheel={(e) => e.currentTarget.blur()}
          />
          <button onClick={handleSearch}>Search address</button>
        </div>

        <input
          type="text"
          placeholder="city"
          disabled={true}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <input
          type="text"
          placeholder="Federative Unit"
          disabled={true}
          value={fu}
          onChange={(e) => setFU(e.target.value)}
        />

        <input
          type="text"
          placeholder="District"
          disabled={true}
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />

        <input
          type="text"
          placeholder="Public Place"
          disabled={true}
          value={publicPlace}
          onChange={(e) => setPublicPlace(e.target.value)}
        />

        <input
          type="text"
          placeholder="Complement"
          disabled={true}
          value={complement}
          onChange={(e) => setComplement(e.target.value)}
        />

        <button>Send Register</button>
      </form>
    </section>
  );
}