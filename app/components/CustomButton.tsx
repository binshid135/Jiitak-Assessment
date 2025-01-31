"use client"
import React from 'react'

interface ButtonProps {
    title?: string;
    handleClick?: () => void;
    loading?:boolean;

}

const CustomButton: React.FC<ButtonProps> = ({ title,handleClick,loading }) => {
    return (
        <div className='mt-3'>
            <button type="submit" className='rounded-full w-[400px] text-white h-[48px] button-text'
                style={{
                    backgroundColor: "rgb(252, 197, 120)",
                    transition: 'background-color 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgb(250, 170, 80)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgb(252, 197, 120)')}
                onClick={handleClick}

            >
                {loading ? <span className="spinner"></span> : title}
            </button>
        </div>
    )
}

export default CustomButton