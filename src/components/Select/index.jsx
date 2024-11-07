import { useState } from 'react';
import { Container, SelectWrapper, Dropdown, Option } from './styles';
import { GoDotFill } from 'react-icons/go';

export function Select({ title, value, options, icon: Icon, onChange, iconColor, showStatusIcon }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (option) => {
        onChange(option.value);
        setIsOpen(false);
    };

    return (
        <Container>
            <span>{title}</span>
            <SelectWrapper onClick={() => setIsOpen(!isOpen)}>
                <div className="selected">
                    {showStatusIcon && <GoDotFill className="statusIcon" style={{ color: iconColor }} />}
                    {value}
                    {Icon && Icon}
                </div>
                {isOpen && (
                    <Dropdown>
                        {options.map((option) => (
                            <Option key={option.value} onClick={() => handleChange(option)}>
                                {option.labelIcon}
                                {option.labelText}
                            </Option>
                        ))}
                    </Dropdown>
                )}
            </SelectWrapper>
        </Container>
    );
}
