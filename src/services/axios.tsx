import axios from "axios";
import { App } from "antd";
import {
  RECORD_UPDATED,
  RECORD_ADDED,
  RECORDS_ERROR,
  RECORD_DELETED,
} from "../constants/messages";

export function useApiFunctions() {
  const { message } = App.useApp();
  const baseURL = process.env.REACT_APP_API_URL;

  const api = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const createDuty = async (name: string) => {
    try {
      await api({
        url: "/duties",
        method: "POST",
        data: {
          name,
        },
      });
      message.success(RECORD_ADDED);
    } catch (error) {
      message.error(RECORDS_ERROR);
    }
  };

  const fetchDuties = async () => {
    try {
      const response = await api({
        url: "/duties?sort[0]=created_at:desc",
        method: "GET",
      });
      return response.data.data;
    } catch (error) {
      message.error(RECORDS_ERROR);
    }
  };

  const fetchDuty = async (id: string) => {
    try {
      const response = await api({
        url: "/duties/" + id,
        method: "GET",
      });
      return response.data.data;
    } catch (error) {
      message.error(RECORDS_ERROR);
    }
  };

  const updateDuty = async (id: string, data: string) => {
    // console.log(id, data);
    try {
      const response = await api({
        url: "/duties/" + id,
        method: "PUT",
        data: {
          name: data,
        },
      });
      message.success(RECORD_UPDATED);
      return response.data.data;
    } catch (error) {
      message.error(RECORDS_ERROR);
    }
  };

  const deleteDuty = async (id: string) => {
    try {
      const response = await api({
        url: "/duties/" + id,
        method: "DELETE",
      });
      message.success(RECORD_DELETED);
      return response.data.data;
    } catch (error) {
      message.error(RECORDS_ERROR);
    }
  };

  return { createDuty, fetchDuties, fetchDuty, updateDuty, deleteDuty };
}
