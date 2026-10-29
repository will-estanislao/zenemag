'use client'

import React from "react"
import { RelationshipField } from '@payloadcms/ui'
import type { RelationshipFieldClientComponent } from "payload"

export const CustomRelationShipFieldClient: RelationshipFieldClientComponent = (
    props,
) => {
    return <RelationshipField {...props}/>
}