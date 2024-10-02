create database papeleria;
use papeleria;


create table category (
categoryCode int,
categoryName varchar(50),
categoryDescription varchar(50),
primary key (categoryCode)
);
 
create table user (
name varchar(50),
lastName varchar(50),
identityNumber varchar(50),
email varchar(50),
password varchar(255),
age int,
phoneNumber varchar(10),
address varchar(100),
role varchar(10),
primary key (identityNumber)
);

create table product (
productCode int,
productName varchar(50),
productDescription varchar(50),
productPrice varchar(50),
productCategory int,
productQuantity int,
primary key (productCode),
foreign key (productCategory)
references category (categoryCode)
);

select * from user;
select * from category;
select * from product;