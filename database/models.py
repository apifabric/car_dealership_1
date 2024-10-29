# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Boolean, Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 29, 2024 12:58:20
# Database: sqlite:////tmp/tmp.sAmMv5ecGf/car_dealership_1/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Accessory(SAFRSBaseX, Base):
    """
    description: Catalog of available car accessories.
    """
    __tablename__ = 'accessory'
    _s_collection_name = 'Accessory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    CarAccessoryList : Mapped[List["CarAccessory"]] = relationship(back_populates="accessory")



class CarModel(SAFRSBaseX, Base):
    """
    description: This table stores information about different car models available at the dealership.
    """
    __tablename__ = 'car_model'
    _s_collection_name = 'CarModel'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    brand = Column(String, nullable=False)
    year = Column(Integer, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    CarList : Mapped[List["Car"]] = relationship(back_populates="model")



class Customer(SAFRSBaseX, Base):
    """
    description: This table contains personal information of customers.
    """
    __tablename__ = 'customer'
    _s_collection_name = 'Customer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String)
    phone_number = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    SaleList : Mapped[List["Sale"]] = relationship(back_populates="customer")
    TestDriveList : Mapped[List["TestDrive"]] = relationship(back_populates="customer")



class Salesperson(SAFRSBaseX, Base):
    """
    description: This table stores details of salespeople working at the dealership.
    """
    __tablename__ = 'salesperson'
    _s_collection_name = 'Salesperson'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    employee_id = Column(String, nullable=False, unique=True)

    # parent relationships (access parent)

    # child relationships (access children)
    SaleList : Mapped[List["Sale"]] = relationship(back_populates="salesperson")



class ServicePackage(SAFRSBaseX, Base):
    """
    description: Details different service packages available for cars.
    """
    __tablename__ = 'service_package'
    _s_collection_name = 'ServicePackage'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    price = Column(Float, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    ServiceBookingList : Mapped[List["ServiceBooking"]] = relationship(back_populates="service_package")



class Car(SAFRSBaseX, Base):
    """
    description: This table keeps track of individual cars in the dealership's inventory.
    """
    __tablename__ = 'car'
    _s_collection_name = 'Car'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vin = Column(String, nullable=False, unique=True)
    model_id = Column(ForeignKey('car_model.id'), nullable=False)
    price = Column(Float, nullable=False)
    color = Column(String)
    is_sold = Column(Boolean, nullable=False)

    # parent relationships (access parent)
    model : Mapped["CarModel"] = relationship(back_populates=("CarList"))

    # child relationships (access children)
    CarAccessoryList : Mapped[List["CarAccessory"]] = relationship(back_populates="car")
    InventoryAuditList : Mapped[List["InventoryAudit"]] = relationship(back_populates="car")
    MaintenanceList : Mapped[List["Maintenance"]] = relationship(back_populates="car")
    SaleList : Mapped[List["Sale"]] = relationship(back_populates="car")
    ServiceBookingList : Mapped[List["ServiceBooking"]] = relationship(back_populates="car")
    TestDriveList : Mapped[List["TestDrive"]] = relationship(back_populates="car")



class CarAccessory(SAFRSBaseX, Base):
    """
    description: Links accessories and cars together with details about quantity.
    """
    __tablename__ = 'car_accessory'
    _s_collection_name = 'CarAccessory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    car_id = Column(ForeignKey('car.id'), nullable=False)
    accessory_id = Column(ForeignKey('accessory.id'), nullable=False)
    quantity = Column(Integer, nullable=False)

    # parent relationships (access parent)
    accessory : Mapped["Accessory"] = relationship(back_populates=("CarAccessoryList"))
    car : Mapped["Car"] = relationship(back_populates=("CarAccessoryList"))

    # child relationships (access children)



class InventoryAudit(SAFRSBaseX, Base):
    """
    description: Logs periodic audits of car inventory.
    """
    __tablename__ = 'inventory_audit'
    _s_collection_name = 'InventoryAudit'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    car_id = Column(ForeignKey('car.id'), nullable=False)
    audit_date = Column(DateTime)
    notes = Column(String)

    # parent relationships (access parent)
    car : Mapped["Car"] = relationship(back_populates=("InventoryAuditList"))

    # child relationships (access children)



class Maintenance(SAFRSBaseX, Base):
    """
    description: Records maintenance activities performed on cars.
    """
    __tablename__ = 'maintenance'
    _s_collection_name = 'Maintenance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    car_id = Column(ForeignKey('car.id'), nullable=False)
    service_date = Column(DateTime)
    notes = Column(String)

    # parent relationships (access parent)
    car : Mapped["Car"] = relationship(back_populates=("MaintenanceList"))

    # child relationships (access children)



class Sale(SAFRSBaseX, Base):
    """
    description: This table logs each car sale transaction.
    """
    __tablename__ = 'sale'
    _s_collection_name = 'Sale'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    car_id = Column(ForeignKey('car.id'), nullable=False)
    customer_id = Column(ForeignKey('customer.id'), nullable=False)
    salesperson_id = Column(ForeignKey('salesperson.id'), nullable=False)
    sale_date = Column(DateTime)
    sale_amount = Column(Float, nullable=False)

    # parent relationships (access parent)
    car : Mapped["Car"] = relationship(back_populates=("SaleList"))
    customer : Mapped["Customer"] = relationship(back_populates=("SaleList"))
    salesperson : Mapped["Salesperson"] = relationship(back_populates=("SaleList"))

    # child relationships (access children)



class ServiceBooking(SAFRSBaseX, Base):
    """
    description: Manages bookings of services by customers.
    """
    __tablename__ = 'service_booking'
    _s_collection_name = 'ServiceBooking'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    car_id = Column(ForeignKey('car.id'), nullable=False)
    service_package_id = Column(ForeignKey('service_package.id'), nullable=False)
    booking_date = Column(DateTime)
    scheduled_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    car : Mapped["Car"] = relationship(back_populates=("ServiceBookingList"))
    service_package : Mapped["ServicePackage"] = relationship(back_populates=("ServiceBookingList"))

    # child relationships (access children)



class TestDrive(SAFRSBaseX, Base):
    """
    description: Logs information about test drive appointments of cars.
    """
    __tablename__ = 'test_drive'
    _s_collection_name = 'TestDrive'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    car_id = Column(ForeignKey('car.id'), nullable=False)
    customer_id = Column(ForeignKey('customer.id'), nullable=False)
    test_drive_date = Column(DateTime, nullable=False)
    feedback = Column(String)

    # parent relationships (access parent)
    car : Mapped["Car"] = relationship(back_populates=("TestDriveList"))
    customer : Mapped["Customer"] = relationship(back_populates=("TestDriveList"))

    # child relationships (access children)
