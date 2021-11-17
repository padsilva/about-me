# :blond_haired_man: About me

Paulo Silva's page with details about his experience, education, skills and projects.

## :rocket: Getting Started

### reCAPTCHA

This project uses [reCAPTCHA](https://www.google.com/recaptcha/about/), so you need to create an account there first.

After that, you need to register a new site with the following specifications:
- `Label`: local
- `reCAPTCHA type`: v2 Tickbox
- `Domains`: localhost

### SendGrid

This project uses [SendGrid](https://sendgrid.com), so you need to create an account there first.

### NextJS

After creating your account on [reCAPTCHA](https://www.google.com/recaptcha/about/) + [SendGrid](https://sendgrid.com) and following the previous steps, you just need to execute the next steps:

- Clone the project:

```bash
  git clone https://github.com/padsilva/about-me
```

- Go to the project directory:

```bash
  cd about-me
```

- Install dependencies:

```bash
  npm install
  # or
  yarn
```

- Rename the `.env.example` to `.env.local` (if you plan to run locally) and edit the keys there.

- Run the development server:

```bash
  npm run dev
  # or
  yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## :computer: Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages

## :construction_worker: Author

[@padsilva](https://www.github.com/padsilva)

## :mailbox: Feedback

If you have any feedback, please reach out to me at pauloalexandreduartesilva@gmail.com.
