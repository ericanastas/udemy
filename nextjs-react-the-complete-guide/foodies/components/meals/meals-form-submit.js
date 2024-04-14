'use client';
import { useFormStatus } from "react-dom"

export function MealsFormSubmitButton() {
    const { pending } = useFormStatus();
    return <button disabled={pending} type="submit">{pending ? 'Submitting...' : 'Share Meal'}</button>
}