/* eslint-disable no-useless-escape */

export const onlyNumbers = /(^\d+$)/;
export const validateDate = /(\d{4})[-.\/](\d{2})[-.\/](\d{2})/;
export const validerCNPJ = /(^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}\-?\d{2}$)/;
export const validatePhone = /(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)/;
export const validateLongitude = /^-?([0-8]?[0-9]|90)(\.[0-9]{1,15})?$/;
export const validateLatitude = /^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,15})$/;
export const validateSpecialCharacters = /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/;
