import Select from "react-select";
import { createRoot } from 'react-dom/client';
import { useForm, Controller } from "react-hook-form";
import { Input } from '@mui/material';
import { Input as AntdInput } from "antd";

import "./styles.css";

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

const App = () => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <Controller
        render={({ field }) => <Input {...field} className="materialUIInput" />}
        name="firstName"
        control={control}
        defaultValue="hayato"
      />
      <label>First Name</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name="lastName"
        control={control}
        defaultValue="maeda"
      />
      <label>Ice Cream Preference</label>
      <Controller
        control={control}
        name="iceCreamType"
        render={({ field }) => (
          <Select
            onChange={field.onChange}
            onBlur={field.onBlur}
            name={field.name}
            value={field.value}
            ref={field.ref} 
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" }
            ]}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};

const container = document.getElementById('root');
 const root = createRoot(container!);
 root.render(<App />);