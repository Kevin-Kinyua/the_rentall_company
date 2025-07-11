"use client";

import { on } from "events";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TenantTable({ tenants, onView, onDelete }) {
  const router = useRouter();
  console.log("Tenants:", tenants);
  const handleView = (tenant) => {
    onView(tenant);
    const modal = new bootstrap.Modal(
      document.getElementById("viewTenantModal")
    );
    modal.show();
  };
  const handleDelete = async (id) => {
    onDelete(id);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Tenant List</h3>
      </div>
      <div className="card-body table-responsive p-0">
        <table className="table table-hover text-nowrap">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Phone</th>
              <th>Unit</th>
              <th>Building</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant, index) => (
              <tr key={tenant.id}>
                <td>{index + 1}</td>
                <td>{tenant.full_name}</td>
                <td>{tenant.phone}</td>
                <td>{tenant.unit_number}</td>
                <td>{tenant.building_name || "N/A"}</td>
                <td>
                  <button
                    className="btn btn-sm btn-info me-1"
                    onClick={() => handleView(tenant)}
                  >
                    View
                  </button>
                  <Link
                    href={`/dashboard/tenants/edit/${tenant.id}`}
                    className="btn btn-warning btn-sm"
                  >
                    Edit
                  </Link>{" "}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(tenant.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
