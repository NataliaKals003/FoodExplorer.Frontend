import { FiPlus, FiX } from 'react-icons/fi';
import { Container, TagInput } from './styles';
import { useEffect, useRef } from 'react';

export function TagItem({ isNew, value, placeholder, onClick, onChange, ...rest }) {

    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
        }
    }, [value]);

    return (
        <Container $isnew={isNew}>
            <TagInput
                type='text'
                value={value}
                readOnly={!isNew}
                ref={inputRef}
                onChange={onChange}
                placeholder={isNew ? placeholder : ''}
                {...rest}
            />

            <button
                type='button'
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}
