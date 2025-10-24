import React from 'react'
// This component only display a sample of the color palette
export const PaletteSample = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded-md shadow-md mb-8">
        <div className="bg-primary hover:bg-primary-strong text-primary-foreground p-4 rounded-md shadow-md">
          <p className="font-bold">Primary Color</p>
        </div>
        <div className="bg-secondary hover:bg-secondary-strong text-secondary-foreground p-4 rounded-md shadow-md mt-4">
          <p className="font-bold">Secondary Color</p>
        </div>
        <div className="bg-accent hover:bg-accent-strong text-accent-foreground p-4 rounded-md shadow-md mt-4">
          <p className="font-bold">Accent Color</p>
        </div>
        <div className="bg-alert hover:bg-alert-strong text-alert-foreground p-4 rounded-md shadow-md mt-4">
          <p className="font-bold">Alert Color</p>
        </div>
      </div>
      <div className="bg-black p-4 rounded-md shadow-md mb-8">
        <div className="bg-primary-dark hover:bg-primary-dark-lite text-primary-dark-foreground p-4 rounded-md shadow-md">
          <p className="font-bold">Primary Color</p>
        </div>
        <div className="bg-secondary hover:bg-secondary-lite text-secondary-dark-foreground p-4 rounded-md shadow-md mt-4">
          <p className="font-bold">Secondary Color</p>
        </div>
        <div className="bg-accent hover:bg-accent-lite text-accent-foreground p-4 rounded-md shadow-md mt-4">
          <p className="font-bold">Accent Color</p>
        </div>
        <div className="bg-alert hover:bg-alert-lite text-alert-foreground p-4 rounded-md shadow-md mt-4">
          <p className="font-bold">Alert Color</p>
        </div>
      </div>
    </div>
  )
}
