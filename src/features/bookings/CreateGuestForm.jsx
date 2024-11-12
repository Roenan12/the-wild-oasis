import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";

import { useCreateGuest } from "./useCreateGuest";

function CreateGuestForm({ onCloseModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },

    reset,
  } = useForm();

  const { createGuest, isCreating } = useCreateGuest();

  function onSubmit(newGuest) {
    const countryFlagImg = `https://flagcdn.com/${newGuest.countryFlag.toLowerCase()}.svg`;

    const finalData = {
      ...newGuest,
      countryFlag: countryFlagImg,
    };

    createGuest(finalData, {
      onSuccess: () => {
        reset();
        onCloseModal?.();
      },
    });
    //console.log(finalData);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Guest full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isCreating}
          {...register("fullName", {
            required: "This field is required",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Full name can only contain letters and spaces",
            },
          })}
        />
      </FormRow>

      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          type="text"
          id="email"
          disabled={isCreating}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Input a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow label="National ID" error={errors?.nationalID?.message}>
        <Input
          type="number"
          id="nationalID"
          disabled={isCreating}
          {...register("nationalID", {
            required: "This field is required",
            minLength: {
              value: 9,
              message: "National ID should be at least 9 numbers",
            },
          })}
        />
      </FormRow>

      <FormRow label="Nationality" error={errors?.nationality?.message}>
        <Input
          type="text"
          id="nationality"
          disabled={isCreating}
          {...register("nationality", {
            required: "This field is required",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Full name should only contain letters without spaces",
            },
          })}
        />
      </FormRow>

      <FormRow label="Country code" error={errors?.countryFlag?.message}>
        <Input
          type="text"
          id="countryFlag"
          disabled={isCreating}
          {...register("countryFlag", {
            required: "This field is required",
            maxLength: {
              value: 2,
              message: "Country code must be exactly 2 characters",
            },
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isCreating}>Create new guest</Button>
      </FormRow>
    </Form>
  );
}

export default CreateGuestForm;
