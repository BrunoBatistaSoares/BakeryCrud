CREATE DATABASE bakery_crud;

CREATE TABLE products (
    product_id VARCHAR(255) PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    description VARCHAR(510)
);

CREATE TABLE categories (
    categorie_id VARCHAR(255) PRIMARY KEY,
    categorie_name VARCHAR(255) NOT NULL
);

CREATE TABLE product_categories (
    product_id VARCHAR(255) REFERENCES products (product_id),
    categorie_id VARCHAR(255) REFERENCES categories (categorie_id),
    PRIMARY KEY (product_id, categorie_id)
);

INSERT INTO categories (categorie_id, categorie_name) VALUES (gen_random_uuid(), 'pães');
INSERT INTO products (product_id,product_name,price,description) VALUES (gen_random_uuid(), 'pão francês', 1, 'delicioso pão francês quentinho com a casca levemente crocante e o miolo leve e macio');
INSERT INTO product_categories(product_id,categorie_id) VALUES ('cd3c4d75-140f-4a70-ae67-589aa63570f0','2d94ff0f-0869-4d58-887e-9a15331f277e');

INSERT INTO products (product_id,product_name,price,description) VALUES (gen_random_uuid(), 'pão doce', 2, 'doce de coco com lascas integrais e massa robusta, perfeito');
INSERT INTO product_categories(product_id,categorie_id) VALUES ('08132864-84c1-4ba6-a158-ade48ba207b4','2d94ff0f-0869-4d58-887e-9a15331f277e');

INSERT INTO products (product_id,product_name,price,description) VALUES (gen_random_uuid(), 'pão carteira', 2, 'carteira com gosto pronunciado e casca macia perfeito para cremes e patês');
INSERT INTO product_categories(product_id,categorie_id) VALUES ('40c4e2b4-c890-44ae-89b9-f384f9191279','2d94ff0f-0869-4d58-887e-9a15331f277e');

INSERT INTO categories (categorie_id, categorie_name) VALUES (gen_random_uuid(), 'laticíneos');
INSERT INTO products (product_id,product_name,price,description) VALUES (gen_random_uuid(), 'queijo prato', 2, 'queijo tipo lanche com aquele azedinho no ponto');
INSERT INTO product_categories(product_id,categorie_id) VALUES ('346ee468-6422-4478-8c42-9d74662fb5b5','12d99797-3f8b-4145-a374-c3bcdb2b8b9c');