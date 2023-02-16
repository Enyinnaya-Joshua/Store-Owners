import storeModel from "../model/storeModel";

import express, { Request, Response } from "express";

const createStore = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, address, snacks, softDrink } = req.body;
    let space = name.replaceAll(" ", "");
    const newStore = await storeModel.create({
      name,
      address,
      snacks,
      softDrink,
      tagNo: `${space}${Math.floor(Math.random() * 100)}`,
    });
    return res.status(201).json({
      message: "Data created successfully",
      data: newStore,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

const getStore = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getProducts = await storeModel.find();
    return res.status(200).json({
      message: "Data gotten successfully",
      data: getProducts,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
    });
  }
};

const getOneStore = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getOneProducts = await storeModel.findById(req.params.id);
    return res.status(200).json({
      message: "Data gotten successfully",
      data: getOneProducts,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
    });
  }
};

export { createStore, getStore, getOneStore };
