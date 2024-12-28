### **Setup Instructions**

#### 1. **Install Dependencies**

1. **Install Node.js** (we recommend using [nvm](https://github.com/nvm-sh/nvm)):
   ```bash
   nvm install
   nvm use
   ```

2. **Install PostgreSQL** (if not already installed):
  - **macOS**:
    ```bash
    brew install postgresql
    brew services start postgresql
    ```
  - **Linux**:
    ```bash
    sudo apt update
    sudo apt install postgresql postgresql-contrib
    sudo service postgresql start
    ```
  - **Windows**:
    Install PostgreSQL from the [official website](https://www.postgresql.org/download/).

3. Install project dependencies:
   ```bash
   npm install
   ```

---

#### 2. **Set Up the Local Database**

1. Check if PostgreSQL is installed and running:
   ```bash
   psql postgres
   ```

2. Use the provided script to set up the database:
   ```bash
   ./setup-db.sh
   ```

   If the script is unavailable, you can create the database manually:

   ```bash
   psql postgres <<EOF
   CREATE DATABASE simple_notes_db;
   CREATE USER my_user WITH PASSWORD 'my_password';
   GRANT ALL PRIVILEGES ON DATABASE simple_notes_db TO my_user;
   EOF
   ```

3. Verify the database is working:
   ```bash
   psql -U my_user -d simple_notes_db
   ```

---

#### 3. **Run Database Migrations**

Ensure the environment variables are set up. Copy the example file:
```bash
cp .env.example .env.local
```

Then, apply the migrations to set up the database schema:
```bash
npx prisma migrate dev
```

---

#### 4. **Generate Prisma Client**

Generate the Prisma Client to interact with the database:
```bash
npx prisma generate
```

---

#### 5. **Start the Development Server**

Run the development server to start working on the project:
```bash
blitz dev
```
