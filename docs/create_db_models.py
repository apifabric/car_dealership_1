# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class CarModel(Base):
    """description: This table stores information about different car models available at the dealership."""
    __tablename__ = 'car_model'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    brand = Column(String, nullable=False)
    year = Column(Integer, nullable=False)

class Car(Base):
    """description: This table keeps track of individual cars in the dealership's inventory."""
    __tablename__ = 'car'
    id = Column(Integer, primary_key=True, autoincrement=True)
    vin = Column(String, nullable=False, unique=True)
    model_id = Column(Integer, ForeignKey('car_model.id'), nullable=False)
    price = Column(Float, nullable=False)
    color = Column(String, nullable=True)
    is_sold = Column(Boolean, nullable=False, default=False)

class Customer(Base):
    """description: This table contains personal information of customers."""
    __tablename__ = 'customer'
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, nullable=True)
    phone_number = Column(String, nullable=True)

class Salesperson(Base):
    """description: This table stores details of salespeople working at the dealership."""
    __tablename__ = 'salesperson'
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    employee_id = Column(String, nullable=False, unique=True)

class Sale(Base):
    """description: This table logs each car sale transaction."""
    __tablename__ = 'sale'
    id = Column(Integer, primary_key=True, autoincrement=True)
    car_id = Column(Integer, ForeignKey('car.id'), nullable=False)
    customer_id = Column(Integer, ForeignKey('customer.id'), nullable=False)
    salesperson_id = Column(Integer, ForeignKey('salesperson.id'), nullable=False)
    sale_date = Column(DateTime, default=datetime.datetime.utcnow)
    sale_amount = Column(Float, nullable=False)

class ServicePackage(Base):
    """description: Details different service packages available for cars."""
    __tablename__ = 'service_package'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)
    price = Column(Float, nullable=False)

class Maintenance(Base):
    """description: Records maintenance activities performed on cars."""
    __tablename__ = 'maintenance'
    id = Column(Integer, primary_key=True, autoincrement=True)
    car_id = Column(Integer, ForeignKey('car.id'), nullable=False)
    service_date = Column(DateTime, default=datetime.datetime.utcnow)
    notes = Column(String, nullable=True)

class ServiceBooking(Base):
    """description: Manages bookings of services by customers."""
    __tablename__ = 'service_booking'
    id = Column(Integer, primary_key=True, autoincrement=True)
    car_id = Column(Integer, ForeignKey('car.id'), nullable=False)
    service_package_id = Column(Integer, ForeignKey('service_package.id'), nullable=False)
    booking_date = Column(DateTime, default=datetime.datetime.utcnow)
    scheduled_date = Column(DateTime, nullable=False)

class TestDrive(Base):
    """description: Logs information about test drive appointments of cars."""
    __tablename__ = 'test_drive'
    id = Column(Integer, primary_key=True, autoincrement=True)
    car_id = Column(Integer, ForeignKey('car.id'), nullable=False)
    customer_id = Column(Integer, ForeignKey('customer.id'), nullable=False)
    test_drive_date = Column(DateTime, nullable=False)
    feedback = Column(String, nullable=True)

class Accessory(Base):
    """description: Catalog of available car accessories."""
    __tablename__ = 'accessory'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)

class CarAccessory(Base):
    """description: Links accessories and cars together with details about quantity."""
    __tablename__ = 'car_accessory'
    id = Column(Integer, primary_key=True, autoincrement=True)
    car_id = Column(Integer, ForeignKey('car.id'), nullable=False)
    accessory_id = Column(Integer, ForeignKey('accessory.id'), nullable=False)
    quantity = Column(Integer, nullable=False)

class InventoryAudit(Base):
    """description: Logs periodic audits of car inventory."""
    __tablename__ = 'inventory_audit'
    id = Column(Integer, primary_key=True, autoincrement=True)
    car_id = Column(Integer, ForeignKey('car.id'), nullable=False)
    audit_date = Column(DateTime, default=datetime.datetime.utcnow)
    notes = Column(String, nullable=True)

# Database setup
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

# Sample data
models = [
    CarModel(name='Model S', brand='Tesla', year=2021),
    CarModel(name='Civic', brand='Honda', year=2020),
    CarModel(name='Mustang', brand='Ford', year=2022)
]

cars = [
    Car(vin='1HGBH41JXMN109186', model_id=1, price=79999.99, color='Red'),
    Car(vin='2HGBH41JXMN109187', model_id=2, price=19999.99, color='Blue'),
    Car(vin='3HGBH41JXMN109188', model_id=3, price=55999.99, color='Black', is_sold=True)
]

customers = [
    Customer(first_name='Alice', last_name='Johnson', email='alice@example.com'),
    Customer(first_name='Bob', last_name='Smith'),
    Customer(first_name='Charlie', last_name='Brown', phone_number='123-456-7890')
]

salespeople = [
    Salesperson(first_name='Diana', last_name='Prince', employee_id='E001'),
    Salesperson(first_name='Clark', last_name='Kent', employee_id='E002')
]

sales = [
    Sale(car_id=3, customer_id=1, salesperson_id=2, sale_amount=55999.99),
]

service_packages = [
    ServicePackage(name='Oil Change', description='Standard oil change', price=29.99),
    ServicePackage(name='Tire Rotation', description='Standard tire rotation', price=49.99)
]

maintenances = [
    Maintenance(car_id=1, notes='Initial checkup'),
    Maintenance(car_id=2, service_date=datetime.datetime(2023, 5, 10), notes='Tire replacement')
]

service_bookings = [
    ServiceBooking(car_id=1, service_package_id=1, scheduled_date=datetime.datetime(2023, 7, 15)),
    ServiceBooking(car_id=2, service_package_id=2, scheduled_date=datetime.datetime(2023, 8, 20))
]

test_drives = [
    TestDrive(car_id=1, customer_id=2, test_drive_date=datetime.datetime(2023, 6, 5)),
    TestDrive(car_id=2, customer_id=3, test_drive_date=datetime.datetime(2023, 6, 10), feedback='Great experience!')
]

accessories = [
    Accessory(name='All-Weather Floor Mats', price=120.00),
    Accessory(name='Roof Rack', price=200.00)
]

car_accessories = [
    CarAccessory(car_id=1, accessory_id=1, quantity=1),
    CarAccessory(car_id=2, accessory_id=2, quantity=2)
]

inventory_audits = [
    InventoryAudit(car_id=1, notes='No issues found'),
    InventoryAudit(car_id=3, audit_date=datetime.datetime(2023, 9, 30), notes='Minor scratches on left door')
]

# Adding and committing sample data to the database
session.add_all(models + cars + customers + salespeople + sales +
                service_packages + maintenances + service_bookings +
                test_drives + accessories + car_accessories + inventory_audits)

session.commit()
