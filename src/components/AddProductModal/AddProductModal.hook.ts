const useAddProduct = (props) => {
  const { formValues, setFormValues } = props;

  const onChangeText = (text: string, name: string) => {
    if (!name && !text) return null;

    const setValue = {
      ["code"]: (value: string) =>
        setFormValues({ ...formValues, code: value }),
      ["name"]: (value: string) =>
        setFormValues({ ...formValues, name: value }),
      ["price"]: (value: string) =>
        setFormValues({ ...formValues, price: value }),
    };

    return setValue[name](text);
  };

  return {
    onChangeText,
  };
};

export default useAddProduct;
