import React, { useState, useEffect } from "react";
import '../../styles/stylesComponents/Tags/Tags.css'

export default function Tags({ TagObject }) {

    return (
        <div className="w-auto h-auto flex align-items-center justify-content-center gap-1 ContenedorTags Mul" style={{ backgroundColor: `#${TagObject?.colorFondo}`, color: `#${TagObject?.color}` }}>
            <i className={`${TagObject?.icon}`}></i>
            {TagObject?.nombre}
        </div>
    );
}
