import * as _ from "lodash";
import moment from "moment";
import { sentenceCase } from "change-case-all";

export const formatDate = (
  date?: string | Date,
  timeFormat = "DD/MM/YYYY",
  isUTC = false
): string => {
  if (!date) return "";
  if (isUTC) {
    return moment.utc(date).format(timeFormat);
  }
  return moment(date).format(timeFormat);
};

export const formatNumber = (number?: number) => {
  if (number === undefined || number === null) {
    return "";
  }
  const roundedNumber = _.round(number, 2);
  if (_.isInteger(roundedNumber)) {
    return _.toNumber(roundedNumber).toLocaleString("en-US");
  } else {
    return _.toNumber(roundedNumber).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
};

export const formatText = (text?: string) => {
  if (text === undefined || text === null) {
    return "";
  }
  return sentenceCase(text || "")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
