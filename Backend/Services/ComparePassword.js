import bcrypt from "bcrypt";

const ComparePassword = async (Databasepassword, password) => {
  try {
    const Compare = await bcrypt.compare(password, Databasepassword);

    if (Compare) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return "SomeThing went Wrong";
  }
};

export { ComparePassword };
